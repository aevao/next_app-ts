'use client'

import { useEffect, useState } from "react";
import view from './view'
import ProfilePage from "./profile/page";
interface Contacts {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DashboardPage = () => {
  const [contacts, setContacts] = useState<Contacts | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
        const data = await response.json();
        setContacts(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Контакты</h1>
      {contacts && (
        <p>{contacts.title}</p>
      )}
     {contacts?.title && <ProfilePage title={contacts.title} />}

      
    </div>
  );
};

export default DashboardPage;
