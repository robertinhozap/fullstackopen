sequenceDiagram
    participant browser
    participant server

    note right of browser: User writes "nova nota" and clicks Save in SPA

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: JSON with new note
    deactivate server

    note right of browser: Browser updates the note list dynamically (SPA)
