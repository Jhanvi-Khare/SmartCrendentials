'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewBadge = () => {

  const {id} = useParams();

  const [badgeDetails, setBadgeDetails] = useState(null);

  const fetchBadgeData = () => {
    fetch('http://localhost:5000/badge/getbyid/'+id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
        setBadgeDetails(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
      fetchBadgeData();
  }, [])


  return (
    <div>
      View badge
    </div>
  )
}

export default ViewBadge;