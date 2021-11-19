# calendar-public
#7 Real version of calendar for client (PUBLIC VERSION)

My app was designed by Socialnet which is used not just by them but also by their clients and employees. 
The app is divided on three routes - admin, pracownik (ang. employee) and client (here: company).

[Admin Website](https://calendar-app-public.herokuapp.com/admin/login)

[Employee Website](https://calendar-app-public.herokuapp.com/pracownik/login)

[Company - example](https://calendar-app-public.herokuapp.com/volkswagen/login)

Credentials

Credentials | Admin | Employee | Volkswagen
--- | --- | --- | ---
Email | admin@admin.pl | employee@employee.pl | volkswagen@volkswagen.pl
Password | admin1 | employee1 | volkswagen1

Admin rights:
- can add new company,
- can add new user in registration form,
- can remove company,
- can see all events created by clients or employees

Employee rights:
- can see all companies,
- can see all events created by clients or admin

Client can do nothing of the above actions and can see events which are created by their company.

# How my app works
The app is divided also on three views - login, dashboard, register. All subjects have an access to login and dashboard but only admin has an access to register.

### Register
Only admin can create a new user which is assign to proper company. Additionally the admin have to be logged to app to be able to create a new user.

### Login
It's necessary to write a proper email and password to log in. After authentication a person is redirected to dashboard and it's created a token in local storage.
Then if the person is not logged out, they don't have to log in again and are automatic redirected to dashboard.

### Dasboard
Dashboard is divided on three organisms - leftbar, calendar and rightbar.

**Leftbar**
- to add new company (only admin),
- to add new user by clicking button Przejdź do rejestracji (ang. Go to registration) (only admin),
- to remove company  (only admin),
- to log out (all),
- to select company and see its added events in calendar (only admin and employee)

[![leftbar-screenshot.png](https://i.postimg.cc/nrxsZ3yD/leftbar-screenshot.png)](https://postimg.cc/DJCfPPyv)

**Calendar**
- to change month and year by clicking button Idź (ang. Go),
- to add new event by clicking on day in calendar,
- it's possible to add more than one event to one day,
- on hover on day-event you can add next event or show event's details in rightbar

[![calendar-screenshot.png](https://i.postimg.cc/PqH0WYnM/calendar-screenshot.png)](https://postimg.cc/QF66sBtB)

**Rightbar**
- to see details of event,
- to edit or remove selected event
- to add image to selected event,
- to download image if exists

[![rightbar-screenshot.png](https://i.postimg.cc/mD5d5FJJ/rightbar-screenshot.png)](https://postimg.cc/TLnqyhRJ)

# Architecture of URL

`https://calendar-app-public.herokuapp.com`/**admin** OR **pracownik** OR **company**(which is created in admin panel in dahboard, f.e. volkswagen)/**login** OR **dashboard**

[![Architecture of URL.png](https://i.postimg.cc/7hzCrptD/Przechwytywanie.png)](https://postimg.cc/T5R2rHXH)