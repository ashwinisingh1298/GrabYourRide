import { Customer } from "./customer";
import { Vehicle } from "./vehicle";

export class Booking {
    // @Id
    // private int bookingId;
    // @OneToOne(cascade=CascadeType.ALL)
    // private Customer customer;
    // @OneToOne(cascade=CascadeType.ALL)
    // private Vehicle vehicle;
    // private LocalDate bookingDate;
    // private LocalDate bookedTillDate;
    // private String bookingDescription;
    // private double totalCost;
    // private double distance;
    // private String bookingStatus;
    bookingId : number;
    customer : Customer;
    vehicle : Vehicle;
    bookingDate : Date;
    bookedTillDate : Date;
    bookingDescription : string;
    totalCost : number;
    distance : number;
    bookingStatus : string;
    //Booking Id
    //Booking Date
    //bookedTillDate
    //TotalCost
    //Vehicle Type
    //bookingStatus
}
