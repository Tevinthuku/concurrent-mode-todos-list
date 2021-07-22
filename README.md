# relay-with-suspense-todos-list

This is an experimental repository which leverages the new react Suspense. 


## Workspaces

### /server
- A dummy graphql server which 
1. returns a list of todos
2. returns a single todo based on the ID.

### /www
- A Relay JS powered React application that is uses concurent mode to fetch-n-render the code & data at the same time.

Its amazing how far React & the community has come.


#### TODOs
- [ ] Integrate mutations, (toggling a todo)
- [ ] Use Fragments to colocate data, (todo with subtodos)
