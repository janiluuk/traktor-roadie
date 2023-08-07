# API client to send live track data from Traktor Pro to a web server

By default data is sent to `http://localhost:8080`. You can change this in `ApiClient.js`.

The following endpoints are used:
- `/deckLoaded/<deck>`: Called when a track is loaded into a deck.
- `/updateDeck/<deck>`: Called when certain values or state changes for a deck.
- `/updateMasterClock`: Called when the master deck or BPM changes.
- `/updateChannel/<channel>`: Called when state changes for a mixer channel.
