import './App.css';
import { Profile } from './Profile';
import userData from './userData.json';

export function App() {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}
