const listItems = {
  mainListItems: {
    Dashboard: {
      text: 'Dashboard',
      icon: 'DashboardIcon',
      component: 'Dashboard',
    },
    Orders: {
      text: 'Orders',
      icon: 'ShoppingCartIcon',
      component: 'Orders',
    },
    Deposits: {
      text: 'Deposits',
      icon: 'PeopleIcon',
      component: 'Deposits'
    }
  },
  secondaryListItems: {

  }
}

Object.keys(listItems.mainListItems).map((item, index) => (
  console.log(item.text)
))