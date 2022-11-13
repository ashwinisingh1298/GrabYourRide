import { Booking } from "./booking";

export class Payment {
    paymentId:number;
    paymentMode:string;
    paymentDate:Date;
    booking:Booking;
    paymentStatus:string;
}
// private int paymentId;
// 	private String paymentMode;
// 	private LocalDate paymentDate;
// 	@OneToOne
// 	private Booking booking;
// 	private String paymentStatus;