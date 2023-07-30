package com.bus.redbus.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bus.redbus.model.Bus;
import com.bus.redbus.repository.BusRepository;

@Service
public class BusServiceImpl implements BusService{
	@Autowired
	private BusRepository busRepository;
	
	public List<Bus> getAllBus(){
		List<Bus> bus = busRepository.findAll();
		return bus; 
	}
	
//	public List<String> getAllBusOnDest(String dest){
//		List<String> busDestList = busRepository.findByDest(dest);
//		return busDestList;
//	}

	@Override
	public List<String> getBusType() {
		List<String> bustypeList = busRepository.getBusType();
		return bustypeList;
	}
	
	@Override
	public List<String> getBusOnDetails(String date,String dest,String type,String ac){
		List<String> busDetailList = busRepository.findBus(date,dest,type,ac);
		return busDetailList;
	}

}
