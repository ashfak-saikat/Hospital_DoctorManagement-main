package com.example.springboot.service;

import java.util.List;

import com.example.springboot.model.LabTest;
import com.example.springboot.model.Rooms;

public interface RoomsService {

	Rooms saveRooms(Rooms rooms);

	Rooms loginRooms(Rooms rooms);

	Rooms updateRooms(Rooms rooms, long roomsId);

	Rooms getRoomsById(long roomsId);
	
	List<Rooms> getAllRooms();
	

}
