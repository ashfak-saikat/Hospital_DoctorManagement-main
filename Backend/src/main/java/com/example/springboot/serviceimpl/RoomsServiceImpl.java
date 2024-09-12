package com.example.springboot.serviceimpl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.springboot.model.Rooms;
import com.example.springboot.repository.RoomsRepository;
import com.example.springboot.service.RoomsService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RoomsServiceImpl implements RoomsService{
	
	@Autowired
	public RoomsRepository roomsRepository;

	@Override
	public Rooms saveRooms(Rooms rooms) {
		System.out.println("Rooms booking Succesfull "+rooms);
		return roomsRepository.save(rooms);
	}
	@Override
	public Rooms updateRooms(Rooms rooms, long roomsId) {
		return null;
	}

	@Override
	public List<Rooms> getAllRooms() {
		System.out.println("Rooms booking Succesfull "+roomsRepository.findAll());
		return roomsRepository.findAll();
	}

	@Override
	public Rooms getRoomsById(long roomsId) {
		return roomsRepository.findById(roomsId).orElseThrow(()->new NoSuchElementException());
	}
	@Override
	public Rooms loginRooms(Rooms rooms) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'loginRooms'");
	}
}
