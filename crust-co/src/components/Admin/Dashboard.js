import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink, useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
   navigate('/');
}




  return (
    <div>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
           Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/userslist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Customer List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/pizzaslist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Pizza List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/baseslist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Base List</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/toppinglist"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Toppings List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/addpizzas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="pencil">Add New Pizza</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/addbases" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="pencil">Add Bases</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/addtopping" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="pencil">Add Toppings</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
            onClick={logout}
          >
           Log Out
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
  )
}
