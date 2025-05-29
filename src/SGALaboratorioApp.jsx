import React, { useState } from "react";
import reactivosData from "./data/reactivos.json";

function SGALaboratorioApp() {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = reactivosData.filter((reactivo) =>
    reactivo.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Guía SGA para Laboratorio</h1>
      <input
        type="text"
        placeholder="Buscar reactivo..."
        className="border p-2 w-full mb-4"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      {filtrados.length > 0 ? (
        <div className="space-y-4">
          {filtrados.map((r, idx) => (
            <div key={idx} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-lg">{r.nombre}</h2>
              <p><strong>Clasificación SGA:</strong> {r.sga}</p>
              <p><strong>Condiciones de Almacenamiento:</strong> {r.almacenamiento}</p>
              <p><strong>Manejo de Residuos:</strong> {r.residuos}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron reactivos con ese nombre.</p>
      )}
    </div>
  );
}

export default SGALaboratorioApp;
