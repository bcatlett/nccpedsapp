/**
 * @file index.ts
 * 
 * Name: index.ts
 * 
 * main reducers page, sets up the data for the app in the store (see actions)
 *
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 7/25/2017.
 *
 * NCC Pediatrics Cordova App
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */ 
import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE
} from '../actions';
import scutdogPdfs from '../res/data/scutdogPdfs';
import {defaultResources, defaultResourcesIds} from '../res/data/resources';
import {REQUEST_DISPLAY_PHONE,RECEIVE_DISPLAY_PHONE} from '../actions/simDevice';
import {combineReducers} from 'redux';


const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'NCCPedsApp'
  }
}
const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
  }
  return state;
}

const resources = (state = defaultResources, action) => {
  return state;
}
const resourcesIds = (state = defaultResourcesIds, action) => {
  return state;
}

const scutdogs = (state = scutdogPdfs, action) => {
  return state;
}

const isAuthenticated = ( state = true, action) => {
  return state;
}
const devicePhone = ( state = "", action) => {
  switch(action.type){
    case REQUEST_DISPLAY_PHONE:
      break;
    case RECEIVE_DISPLAY_PHONE:
      state = action.phone;
      break;
  }
  return state;
}
const reducer = combineReducers({
  view,
  resources,
  resourcesIds,
  isAuthenticated,
  scutdogs,
  devicePhone
});

export default reducer;

