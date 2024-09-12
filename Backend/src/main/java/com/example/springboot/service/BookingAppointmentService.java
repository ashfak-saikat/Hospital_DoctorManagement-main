package com.example.springboot.service;

import java.util.List;

import com.example.springboot.exception.AppointmentNotValidException;
import com.example.springboot.model.Ambulance;
import com.example.springboot.model.BookingAppointment;

public interface BookingAppointmentService {

	BookingAppointment saveBookingAppointment(BookingAppointment bookingAppointment);

	BookingAppointment addAppointment(long doctorId,long patientId, BookingAppointment bookingAppointment) throws AppointmentNotValidException ;

	List <BookingAppointment> getAllAppointments();

	BookingAppointment getAppointmentById(long appointmentId);

}
