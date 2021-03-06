/**
 * @file OnCallListPage.tsx
 * File in charge of Displaying the on call list
 
 * Name: OnCallListPage.ts
 * Purpose of this file is to provide the view for the main page of the app -  or it's dashboard
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
import * as React from 'react';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import BottomNavigationComp from '../components/BottomNavigation';
import OnCallListContainer from '../containers/OnCallListPage';
//import ExternalLink from '../components/ExternalLink';

export interface Props {
  appPage: AppPageInterface;
  history: any;
  devicePhone: any;
}
export interface State {
  screen : any;
}

class OnCallListPage extends React.Component<Props, State>{
  componentWillMount(){  
    this.setState({
      screen : this.props.appPage.screen
    });
  }
  render(){
    //@todo move all of my styles to a folder and do imports and/or use combines
    return (
      <div>
        <OnCallListContainer appPage={this.props.appPage}/>
        <BottomNavigationComp screen={this.state.screen}/>
      </div>
    )
  }
}
export default withRouter(OnCallListPage);