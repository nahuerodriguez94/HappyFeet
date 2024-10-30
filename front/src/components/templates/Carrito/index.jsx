import React, { useState } from 'react';

function Carrito() {
    const [articulosCarrito, setArticulosCarrito] = useState([]);

    // Agregar curso al carrito
    const agregarCurso = (curso) => {
        const cursoExistente = articulosCarrito.find(item => item.id === curso.id);
        if (cursoExistente) {
            setArticulosCarrito(articulosCarrito.map(item =>
                item.id === curso.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
        } else {
            setArticulosCarrito([...articulosCarrito, { ...curso, cantidad: 1 }]);
        }
    };

    // Eliminar curso del carrito
    const eliminarCurso = (id) => {
        setArticulosCarrito(articulosCarrito.filter(item => item.id !== id));
    };

    // Vaciar el carrito
    const vaciarCarrito = () => {
        setArticulosCarrito([]);
    };

    // Mostrar el carrito en el DOM
    const carritoHTML = () => {
        return articulosCarrito.map(curso => (
            <tr key={curso.id}>
                <td><img src={curso.imagen} width="100" alt={curso.titulo} /></td>
                <td>{curso.titulo}</td>
                <td>{curso.precio}</td>
                <td>{curso.cantidad}</td>
                <td>
                    <button onClick={() => eliminarCurso(curso.id)} className="borrar-curso">
                        X
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <h2>Lista de Cursos</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <table id="carrito">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Curso</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody id="lista-carrito">
                    {carritoHTML()}
                </tbody>
            </table>
        </div>
    );
}

function ListaCursos() {
    const cursos = [
        { id: '1', imagen: 'ruta_imagen_1.jpg', titulo: 'Curso 1', precio: '$10' },
        { id: '2', imagen: 'ruta_imagen_2.jpg', titulo: 'Curso 2', precio: '$20' },
        { id: '3', imagen: 'ruta_imagen_3.jpg', titulo: 'Curso 3', precio: '$30' },
    ];

    return (
        <div id="lista-cursos">
            {cursos.map(curso => (
                <div key={curso.id}>
                    <h4>{curso.titulo}</h4>
                    <p>{curso.precio}</p>
                    <button onClick={() => agregarCurso(curso)} className="agregar-carrito">
                        Agregar al Carrito
                    </button>
                </div>
            ))}
        </div>
    );
}

function App() {
    return (
        <div>
            <ListaCursos />
            <Carrito />
        </div>
    );
}

export default App;
