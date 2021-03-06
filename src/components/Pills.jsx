import React, { Component } from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

//Menu Items as tables
import BreakfastTable from "./subTable/BreakfastTable";
import LunchTable from "./subTable/LunchTable";
import DinnerTable from  "./subTable/DinnerTable";
import DrinkTable from "./subTable/DrinkTable";

//Images
import BreakfastImage from "./assets/restaurant-breakfast.jpg";
import LunchImage from "./assets/salad.jpg";
import DinnerImage from "./assets/Pizza.jpg";
import DrinkImage from "./assets/cocktail.jpg"

import { BrowserRouter as Router } from "react-router-dom";

class Pills extends Component {
    state = {
        items: {
            default: "1",
        }
    };

    togglePills = (type, tab, props) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });

            
        }
    };

    render() {
        let tableItem;

            if (this.state.items.default == "1") {
                tableItem = BreakfastImage;
            }
            else if (this.state.items.default == "2") {
                tableItem = LunchImage;
            }
            else if (this.state.items.default == "3") {
                tableItem = DinnerImage;
            }
            else if (this.state.items.default == "4") {
                tableItem = DrinkImage;
            }

        return (
            <Router>
                <MDBContainer className="mt-4">
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src={tableItem} waves />
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="12">
                                    <h2>Interactive Menu</h2>
                                    <MDBNav className="mt-5 nav-pills">
                                        <MDBNavItem>
                                            <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                                                Breakfast
                                </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                                                Lunch
                                </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                                                Dinner
                                        </MDBNavLink>
                                        </MDBNavItem>

                                        <MDBNavItem>
                                            <MDBNavLink to="#" active={this.state.items["default"] === "4"} onClick={this.togglePills("default", "4")} >
                                                                Drinks
                                            </MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNav>
                                    <MDBTabContent activeItem={this.state.items["default"]}>
                                        <MDBTabPane tabId="1">
                                            <p>
                                                Consequat occaecat ullamco amet non eiusmod nostrud dolore
                                                irure incididunt est duis anim sunt officia. Fugiat velit
                                                proident aliquip nisi incididunt nostrud exercitation
                                                proident est nisi. Irure magna elit commodo anim ex veniam
                                                culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                                                consequat eu adipisicing minim anim aliquip cupidatat culpa
                                                excepteur quis. Occaecat sit eu exercitation irure Lorem
                                                incididunt nostrud.
                                            </p>
                                            <BreakfastTable />
                                        </MDBTabPane>
                                        <MDBTabPane tabId="2">
                                            <p>
                                                Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                                                mollit commodo mollit ex. Aute sunt incididunt amet commodo
                                                est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                                                voluptate exercitation cillum id incididunt elit sunt. Qui
                                                minim sit magna Lorem id et dolore velit Lorem amet
                                                exercitation duis deserunt. Anim id labore elit adipisicing
                                                ut in id occaecat pariatur ut ullamco ea tempor duis.
                                            </p>
                                            <LunchTable />
                                        </MDBTabPane>
                                        <MDBTabPane tabId="3">
                                            <p>
                                                Est quis nulla laborum officia ad nisi ex nostrud culpa
                                                Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                                                ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                                                veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                                                labore incididunt do fugiat commodo aliquip sit id deserunt
                                                reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                                                aute veniam incididunt mollit cupidatat esse irure officia
                                                elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                                                labore ipsum laboris ipsum commodo sunt tempor enim
                                                incididunt. Commodo quis sunt dolore aliquip aute tempor
                                                irure magna enim minim reprehenderit. Ullamco consectetur
                                                culpa veniam sint cillum aliqua incididunt velit ullamco
                                                sunt ullamco quis quis commodo voluptate. Mollit nulla
                                                nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                                                voluptate voluptate consequat non.
                                            </p>
                                            <DinnerTable/>
                                        </MDBTabPane>
                                        <MDBTabPane tabId="4">
                                            <p>
                                                Consequat occaecat ullamco amet non eiusmod nostrud dolore
                                                irure incididunt est duis anim sunt officia. Fugiat velit
                                                proident aliquip nisi incididunt nostrud exercitation
                                                proident est nisi. Irure magna elit commodo anim ex veniam
                                                culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                                                consequat eu adipisicing minim anim aliquip cupidatat culpa
                                                excepteur quis. Occaecat sit eu exercitation irure Lorem
                                                incididunt nostrud.
                                            </p>
                                            <DrinkTable/>

                                        </MDBTabPane>

                                    </MDBTabContent>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </Router>
        );
    }
}

export default Pills;