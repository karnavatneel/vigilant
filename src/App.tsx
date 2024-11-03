import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <img src="https://www.mitwpu.edu.in/wp-content/uploads/2017/01/MIT-WPU-Logo.png" alt="MIT-WPU Logo" className="h-12" />
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link></li>
        <li><Link to="/clubs" className="hover:text-blue-200 transition duration-300">Clubs</Link></li>
        <li><Link to="/upcoming-events" className="hover:text-blue-200 transition duration-300">Upcoming Events</Link></li>
        <li><Link to="/contact-us" className="hover:text-blue-200 transition duration-300">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://www.mitwpu.edu.in/wp-content/uploads/2017/01/MIT-WPU-Campus.jpg)' }}>
      <div className="container mx-auto p-4 pt-6 mt-10">
        <h1 className="text-3xl font-bold text-blue-500">Welcome to MIT-WPU</h1>
        <p className="text-lg text-gray-600">MIT-WPU is a university that offers a wide range of academic programs and activities.</p>
      </div>
    </div>
  );
}

function Clubs() {
  const [clubs, setClubs] = useState([
    { id: 1, name: 'Club 1', description: 'This is club 1', type: 'Tech' },
    { id: 2, name: 'Club 2', description: 'This is club 2', type: 'Non-Tech' },
    { id: 3, name: 'Club 3', description: 'This is club 3', type: 'Tech' },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const filteredClubs = clubs.filter((club) => {
    return club.name.toLowerCase().includes(search.toLowerCase()) && (filter === '' || club.type === filter);
  });

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold text-blue-500">Clubs</h1>
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="w-full p-2 mb-4" />
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full p-2 mb-4">
        <option value="">All</option>
        <option value="Tech">Tech</option>
        <option value="Non-Tech">Non-Tech</option>
      </select>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Description</th>
            <th className="text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredClubs.map((club) => (
            <tr key={club.id} className="hover:bg-gray-100">
              <td><Link to={`/clubs/${club.id}`}>{club.name}</Link></td>
              <td>{club.description}</td>
              <td>{club.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ClubDetails() {
  const [club, setClub] = useState({
    id: 1,
    name: 'Club 1',
    description: 'This is club 1',
    type: 'Tech',
    mission: 'Our mission is to provide a platform for students to learn and grow.',
    vision: 'Our vision is to become the best club in the university.',
    activities: ['Activity 1', 'Activity 2', 'Activity 3'],
    photos: ['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg'],
    contact: 'club1@example.com',
  });

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold text-blue-500">{club.name}</h1>
      <p className="text-lg text-gray-600">{club.description}</p>
      <h2 className="text-2xl font-bold text-blue-500">Mission and Vision</h2>
      <p className="text-lg text-gray-600">{club.mission}</p>
      <p className="text-lg text-gray-600">{club.vision}</p>
      <h2 className="text-2xl font-bold text-blue-500">Activities</h2>
      <ul>
        {club.activities.map((activity) => (
          <li key={activity}>{activity}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold text-blue-500">Photos</h2>
      <div className="flex space-x-4">
        {club.photos.map((photo) => (
          <img src={photo} alt="Photo" className="h-48" />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-blue-500">Contact</h2>
      <p className="text-lg text-gray-600">{club.contact}</p>
    </div>
  );
}

function UpcomingEvents() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2023-03-01', time: '10:00 AM', location: 'Auditorium', description: 'This is event 1' },
    { id: 2, name: 'Event 2', date: '2023-03-02', time: '11:00 AM', location: 'Seminar Hall', description: 'This is event 2' },
    { id: 3, name: 'Event 3', date: '2023-03-03', time: '12:00 PM', location: 'Conference Room', description: 'This is event 3' },
  ]);

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold text-blue-500">Upcoming Events</h1>
      <div className="flex flex-wrap -mx-4">
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold text-blue-500">{event.name}</h2>
              <p className="text-lg text-gray-600">{event.date} {event.time}</p>
              <p className="text-lg text-gray-600">{event.location}</p>
              <p className="text-lg text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server
  };

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold text-blue-500">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-gray-600">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-600">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-600">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<ClubDetails />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;