import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState("Ação");
  
  function handleClickButton(selectedId: number, selectedTitle: string) {
    setSelectedGenreId(selectedId);
    setSelectedGenreTitle(selectedTitle);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onSelectGenreId={selectedGenreId} onSelectGenre={handleClickButton}/>
      <Content id={selectedGenreId} title={selectedGenreTitle}/>
    </div>
  )
}
