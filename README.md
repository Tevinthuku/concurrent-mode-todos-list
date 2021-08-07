# relay-with-suspense-todos-list 🧪 ⚠️

This is an experimental repository which leverages the new react concurent mode. 


## Workspaces

### /server
- A dummy graphql server which 
1. returns a list of todos
2. returns a single todo based on the ID.

### /www
- A Relay JS powered React application that is uses concurent mode to fetch-n-render the code & data at the same time.

Its amazing how far React & the community has come.


## To setup
1. Install lerna globally
```
npm install --global lerna
```
2. Clone the repo
3. Run 
```
lerna boostrap
```
4. Start the react dev server

```
npm run dev -- --scope=www
```


#### TODOs
- [ ] Integrate mutations, (toggling a todo)
- [x] Use Fragments to colocate data, (todo with subtodos)
