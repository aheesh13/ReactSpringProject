package com.bus.redbus.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "BUS")
public class Bus {
	
	@Id
	@Column(name="BUS_REC_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long busRecordId;
	
	@Column(name="BUS_NAME")
	private String busName;
	
	@Column(name="NO_OF_SEAT")
	private int numberOfSeats;
	
	@Column(name="BUS_TYPE")
	private String bus_type;
	
	@Column(name="AC")
	private String ac = "NO";
	
	// Unidirectional
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bus_seat_mapping_id")
    private BusSeatMapping busSeatMapping;

	@OneToMany(mappedBy = "bus", cascade = {
	        CascadeType.ALL
	    })
	    private List < BusDateAndDestination > busDateAndDest;

	

	public Bus() {
		
	}
	public Bus(long busRecordId, String busName, int numberOfSeats, BusSeatMapping busSeatMapping,
			List<BusDateAndDestination> busDateAndDest) {
		super();
		this.busRecordId = busRecordId;
		this.busName = busName;
		this.numberOfSeats = numberOfSeats;
		this.busSeatMapping = busSeatMapping;
		this.busDateAndDest = busDateAndDest;
	}

	public long getBusRecordId() {
		return busRecordId;
	}

	public void setBusRecordId(long busRecordId) {
		this.busRecordId = busRecordId;
	}

	public String getBusName() {
		return busName;
	}

	public void setBusName(String busName) {
		this.busName = busName;
	}

	public int getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public BusSeatMapping getBusSeatMapping() {
		return busSeatMapping;
	}

	public void setBusSeatMapping(BusSeatMapping busSeatMapping) {
		this.busSeatMapping = busSeatMapping;
	}

	public List<BusDateAndDestination> getBusDateAndDest() {
		return busDateAndDest;
	}

	public void setBusDateAndDest(List<BusDateAndDestination> busDateAndDest) {
		this.busDateAndDest = busDateAndDest;
	}

	
	
	
}
