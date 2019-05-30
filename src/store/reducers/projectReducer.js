const initState = {
  projects: [
    {id: '1', title: 'My Site', content: 'This is a react website with a firebase backend and CMSs for Projects and my Blog coded from scratch'},
    {id: '2', title: 'Canal', content: 'Automated fund amanmgent system built on the ethereum blcokchain with a react front end - stack: solidity, web3, truffle, react'},
    {id: '3', title: 'SubscrETH', content: 'Is a decentralsied subscription smart contract wiritten in solidity'}
  ]
}﻿

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log("created project", action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

 export default projectReducer
