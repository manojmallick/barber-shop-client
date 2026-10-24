# Barber Shop Client

Angular web app for booking barber appointments. Pick a shop, choose a day and an available time slot, optionally choose a barber, enter your details and get a booking confirmation.

This is the UI half of the project. It needs the REST backend, [barber-shop-api](https://github.com/manojmallick/barber-shop-api), to be running.

> **The brief:** a barber-shop owner wants customers to book an appointment with the barber of their choice. He can't gather customer feedback, send reminders or collect metrics. The work is split into phases.

## Features

| Phase | Capability | Status |
|---|---|---|
| 1 | Book an available barber, 30-minute slots | Done |
| 2 | Pick a time slot and see which barbers are free, or pick a barber and see their schedule; barbers ordered by experience | Done |
| 3 | Reminder one hour before the appointment | Done on the API side (email) |
| Extra | Multiple shops: choose a shop first, everything else is scoped to it | Done |
| Extra | Confirmation page after booking | Done |
| Extra | UI for managing services | Pending (services come from the API) |
| Planned | Change or cancel an appointment, recurring bookings, waiting list, shop-owner metrics | Not started |

## Tech stack

Angular 9, NgRx 10 (store, effects, entity, router-store, devtools), RxJS 6, Bootstrap 4 with ng-bootstrap, ngx-toastr, Font Awesome 4, Karma/Jasmine for unit tests, Protractor for end-to-end tests, Docker with Nginx for production.

## Quick start

### Option A: Docker

```bash
git clone https://github.com/manojmallick/barber-shop-client.git
cd barber-shop-client

sh ./run-dev.sh   # development, http://localhost:4200
sh ./run.sh       # production build behind Nginx, http://localhost
```

On Windows use `run-dev.bat` or `run.bat`.

### Option B: Node

Requires Node.js 12 or newer (the Docker image uses Node 12) and npm.

```bash
npm install
npm start          # ng serve, http://localhost:4200
```

### Start the backend first

The UI loads shops, barbers and availability from the API. Run [barber-shop-api](https://github.com/manojmallick/barber-shop-api) (its dev setup listens on `http://localhost:8080`) before opening the app. Without it the shop list stays empty.

## Configuration

The API address and the booking window are read at runtime from `window.env`, defined in `src/assets/env.js` (generated from `env.template.js` in the Docker setup).

| Setting | `env.js` key | Docker variable | Default | Meaning |
|---|---|---|---|---|
| API base URL | `baseUrl` | `APP_BASE_URL` | `http://localhost:8080` | Where the backend runs. The client calls `<baseUrl>/api/v1/...` |
| Booking window | `maxDays` | `APP_MAX_DAYS` | `90` | How many days ahead customers can book |

`docker-compose-dev.yml` points to `http://localhost:8080` (the API's dev port); `docker-compose.yml` points to `http://localhost:8088` (the API's production-style port). Edit these values to match where your API runs.

## How it works

Routes:

| URL | Screen |
|---|---|
| `/shops` | Shop list (default route) |
| `/shops/:shopId` | Redirects to the shop's appointments |
| `/shops/:shopId/appointments` | Choose a date, slot and barber; enter customer details |
| `/shops/:shopId/appointments/:appointmentId` | Booking confirmation |

State is managed with NgRx. Each feature has actions, a reducer, effects that call the API, and resolvers that load data before a route renders.

API endpoints used (all under `<baseUrl>/api/v1`): `/shops`, `/barbers`, `/availabilities`, `/appointments`.

## Project structure

```
src/app/
├── app.module.ts, app-routing.module.ts
├── core/                     Layout, navbar, footer, 404 page, root reducers
├── shops/
│   ├── actions/ reducers/ effects/ selectors/    NgRx state
│   ├── services/             HTTP clients for shops, barbers, availabilities, appointments
│   ├── resolvers/            Pre-load data for routes
│   ├── containers/           Smart components (shop list, appointment, confirmation)
│   ├── components/           Presentational components (shop, appointment and confirmation details)
│   ├── models/               TypeScript interfaces
│   └── validation/           Form validation messages
└── appointment/              Lazy-loaded booking module (routes under :shopId/appointments)
src/environments/             Angular build environments
src/assets/env.js             Runtime configuration (API URL, max days)
nginx/nginx.conf              Production web server config
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server on port 4200 |
| `npm run build` | Build to `dist/` (add `-- --prod` for production) |
| `npm test` | Unit tests (Karma and Jasmine) |
| `npm run lint` | TSLint |
| `npm run e2e` | End-to-end tests (Protractor) |

## Related

- Backend: [barber-shop-api](https://github.com/manojmallick/barber-shop-api): REST API, MongoDB, email reminders, Swagger docs.

## License

MIT © [Manoj Mallick](https://github.com/manojmallick)
