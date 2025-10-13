sequenceDiagram
    participant browser
    participant server

    note right of browser: User opens the SPA version of the site

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS stylesheet

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: SPA JavaScript document

    note right of browser: Browser executes JS and fetches notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: JSON array of notes

    note right of browser: Browser renders the notes dynamically
