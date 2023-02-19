# Rust Programming

This is base repo for the website hosted at [Rust Programming](https://rustp.org/)

To make a copy, clone this repo and in the rustp folder, run
```
yarn install
```
Then, export Node Option ( in Linux and Mac)
```
export NODE_OPTIONS=--openssl-legacy-provider
```
And finally,
```
gatsby develop
```
To generate static website to host, run

```
gatsby build
```

and you can see that there is a website in `/public` folder.

You can test it on Linux, using 

```
python3 -m http.server
```

command

