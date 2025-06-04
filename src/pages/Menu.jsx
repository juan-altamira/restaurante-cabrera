import './Menu.css';

const Menu = () => {
  const menuSections = [
    {
      title: 'ENTRADAS',
      items: [
        { name: 'Provoleta', description: 'Queso provolone a la parrilla con hierbas y miel', price: '4.200' },
        { name: 'Empanadas', description: 'Carne cortada a cuchillo, cebolla, huevo y aceitunas', price: '900 c/u' },
        { name: 'Matambre de cerdo', description: 'Con ensalada rusa y salsa criolla', price: '4.800' },
      ],
    },
    {
      title: 'CORTES PREMIUM',
      items: [
        { name: 'Bife de Chorizo', description: 'Corte premium de 400g con guarnición', price: '8.900' },
        { name: 'Ojo de Bife', description: 'Corte ancho y tierno de 450g', price: '9.800' },
        { name: 'Entraña', description: 'Corte jugoso de 350g con chimichurri', price: '8.200' },
      ],
    },
    {
      title: 'GUARNICIONES',
      items: [
        { name: 'Papas Fritas', price: '1.800' },
        { name: 'Ensalada Mixta', price: '2.100' },
        { name: 'Puré de Calabaza', price: '1.900' },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>NUESTRO MENÚ</h1>
        <p className="menu-subtitle">Sabores auténticos de la parrilla argentina</p>
      </div>

      <div className="menu-sections">
        {menuSections.map((section, index) => (
          <div key={index} className="menu-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="menu-items">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    {item.description && <p className="item-description">{item.description}</p>}
                  </div>
                  <span className="item-price">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="menu-footer">
        <p>Consultar por nuestro menú de postres y vinos</p>
        <button className="reservation-button">RESERVAR MESA</button>
      </div>
    </div>
  );
};

export default Menu;
