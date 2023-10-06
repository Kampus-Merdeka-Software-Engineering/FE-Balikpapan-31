const outputDoctorNames = document.getElementsByClassName('name');
const outputDoctorJobs = document.getElementsByClassName('job');
const outputUniversities = document.getElementsByClassName('university');
const outputLicenses = document.getElementsByClassName('noLicensi');

  fetch('https://be-balikpapan-31-production.up.railway.app/doctor')
    .then(response => response.json())
    .then(data => {
      const doctorNames = data.map(doctor => doctor.doctor_name);
      const doctorJobs = data.map(doctor => doctor.specialist);
      const universities = data.map(doctor => doctor.university);
      const licenses = data.map(doctor => doctor.license);

      for (let index = 0; index < doctorNames.length; index++) {
        outputDoctorNames[index].textContent = doctorNames[index];
        outputDoctorJobs[index].textContent = doctorJobs[index];
        outputUniversities[index].textContent = universities[index];
        outputLicenses[index].textContent = licenses[index];
      }

    })
    .catch(error => {
      console.error(error);
    });