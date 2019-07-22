# Gatsby Mono

Seeing if it is possible to have Gatsby run its own babel processing on code that has been symlinked.

This is doable with vanilla webpack with `symlinks: false` as described here:
https://github.com/webpack/webpack/issues/1643


## To Run

cd my-site
npm link ../common
yarn develope
