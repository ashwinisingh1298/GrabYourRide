import { Driver } from "./driver";

export class Vehicle {
//     private int vehicleId;
// private String vehicleNumber;
// @OneToOne(cascade=CascadeType.ALL)
// private Driver driver;
// private String type;
// private String category;
// private String description;
// private String location;
// private int capacity;
// private double chargesPerKM;
// private double fixedCharges;
vehicleId : number;
vehicleNumber : string;
type : string;
category : string;
driver : Driver;
description : string;
location : string;
capacity : number;
chargesPerKM : number;
fixedCharges : number;
}
