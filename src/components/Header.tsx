interface HeaderPros {
    selectedGenre: { title: string };
}

export function Header({selectedGenre}: HeaderPros){
    return (
        <header>
        <span
          className="category"
        >
          Categoria:
          <span> {selectedGenre.title}</span></span>
      </header>
    );
}