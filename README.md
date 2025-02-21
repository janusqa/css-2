=== setting up tailwindcss
- npm install -D tailwindcss @tailwindcss/cli
- add '@import "tailwindcss";' to your main/shared/dedicated tailwind css file
- npx @tailwindcss/cli -i ./src/tailwind-in.css -o ./src/tailwind-out.css --watch
- include tailwind-out.css in any html files that needs it via <link rel"stylesheet" href="tailwind-out.css">

=== setting up sass
- npm install -D sass
- npx sass input.scss output.css
- npx sass --watch input.scss:output.css