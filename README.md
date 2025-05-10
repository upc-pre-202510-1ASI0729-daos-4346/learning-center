# Learning Center Web Application (learning-center)

## Summary

Learning Center Application (Angular Framework Edition), illustrating CRUD behavior and in-app navigation, with Angular Material and Angular Router. It also uses a mock API de [Beeceptor](https://beeceptor.com/).   

## Features

Project features include:

- CRUD operations for Course Management.
- Material Design-based components.
- Integration with a mock API.
- In-app navigation.
- Environment configuration.
- Domain-Driver Design approach.

## Documentation
The documentation is available in the `docs` folder. It includes:
- User Stories are available in the [docs/user-stories.md](docs/user-stories.md) file.

## Frameworks and Libraries
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

It also uses the following dependencies:

- Angular Material (https://material.angular.io/).
- ngx-translate ( https://github.com/ngx-translate/core ).
- ngx-translate/http-loader (https://github.com/ngx-translate/http-loader).

## Mock API setup
Run the following commands to start the fake API server:
To use the Mock API:
  - Input a project name (e.g. myprojectname)
  - Click "Create Moke Server" then setup a CRUD route going to "Mocking Rules" -> "Additional Route Types" -> "Setup a CRUD Route"
  - Under "Entity Configuration" set the "API path i" as /api/courses
  - The Rest API path to get all the courses, for a project name "myprojectname", should be `https://myprojectname.free.beeceptor.com/api/users`  
  - Using curl send some post request to have some courses, for instance:
````bash
 curl -H 'Content-Type: application/json' \
      -d '{ "title":"TypeScript","description":"This course is about TypeScript.", "available": true}' \
      -X POST \
      https://myprojectname.free.beeceptor.com/api/courses
```

## Serve the frontend application
Run `npm install`
Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

