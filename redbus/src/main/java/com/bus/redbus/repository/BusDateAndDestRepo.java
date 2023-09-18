package com.bus.redbus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bus.redbus.model.BusDateAndDestination;

public interface BusDateAndDestRepo extends JpaRepository<BusDateAndDestination, Long>{

}
