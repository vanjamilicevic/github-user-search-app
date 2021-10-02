
## The challenge

Your challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

## Deploying your project

- Production URL: [http://valentina-milicevic-prod-github-user-search-app.vercel.app](http://valentina-milicevic-prod-github-user-search-app.vercel.app)
- Development URL: [http://valentina-milicevic-dev-github-user-search-app.vercel.app](http://valentina-milicevic-dev-github-user-search-app.vercel.app)

## Screenshots

Desktop version (dark): 

![Desktop version (dark)](./assets/screenshots/desktop-dark.png)

Desktop version (light): 

![Desktop version (light)](./assets/screenshots/desktop-light.png)

Tablet version:

![Tablet version](./assets/screenshots/tablet.png)

Mobile version:

![Mobile version](./assets/screenshots/mobile.png)