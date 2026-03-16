import './Mapa.css';
import L, { marker } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';

import 'leaflet/dist/leaflet.css';

function ClickHandler({onAdd}){
    useMapEvents({
        click(e){
            const {lat,lng} = e.latlng;
            onAdd({lat, lng});
        }
    });
    return null;
}

export default function Mapa() {

    const centroInicial = [-22.913933, -47.00000]   // default
    const local = [-22.9137900, -47.0681000] // SENAI

    const [pontos, setPontos] = useState([]);
    const idRef = useRef(1);

    const [posicao, setPosicao] = useState(null); // posição do usuário
    const [erro, setErro] = useState("");
    const zoomInicial = posicao ? 15 : 13;

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setErro("Seu navegador não tem suporte para geolocalização");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosicao({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            () => {
                setErro("Não foi possivel obter localização");
            },
            {
                enableHighAccuracy: true,
                timeout: 8000,
                maximumAge: 0,
            }

        );

    }, []);

    function adicionarPontos({ lat, lng }) {
        const novo = {
            id: idRef.current++,
            lat,
            lng,
            distanciaM: calcularDistanciaM({ lat, lng }, local)
        };
        setPontos((prev) => [...prev, novo]);
    }

    function calcularDistanciaM(alvo, origem) {
        if (!origem) return null;
        const a = L.latLng(origem)
        const b = L.latLng(alvo.lat, alvo.lng)
        return a.distanceTo(b);
    }

    function formataDist(metros){
        if(metros == null) return "--"
        if(metros < 1000) return `${metros.toFixed(0)} m`;
        return `${(metros / 1000).toFixed(2)} km`;
    }

    function limpaPontos(){
        setPontos([]);
        idRef.current = 1;
    }

    const pontosOrdenados = [...pontos].sort((a,b) =>{
        const da = a.distanciaM ?? Infinity;
        const db = b.distanciaM ?? Infinity;
        return da - db;
    })



    return (
        <section className='mapa'>
            <h1>Senai Burguer</h1>
            <p>Apareceu</p>

            {erro && <div>{erro}</div>}

            <section className='painel'>
                <div className='painel-topo'>
                    <h3>Pontos Adicionados</h3>
                    <button className='botao' onClick={limpaPontos}>
                        Limpar pontos
                    </button>
                </div>

                {pontos.length === 0 ? (
                    <p className='vazio'>Nenhum ponto foi adicionado ainda</p>
                ) : (
                    <ul className='lista-pontinhos'>
                        {pontosOrdenados.map((p) => (
                            <li key={p.id} className='pontinhos'>
                                <span>#{p.id}</span>
                                <span>
                                    {p.lat.toFixed(5)}, {p.lng.toFixed(5)}
                                </span>
                                <span className='dist'>
                                    {formataDist(p.distanciaM)}
                                </span>
                            </li>
                        ))}

                    </ul>
                )}
            </section>

            <MapContainer
                center={posicao ? [posicao.lat, posicao.lng] : centroInicial}
                zoom={zoomInicial}
                scrollWheelZoom={true}
                className='mapaContainer'

            >
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {posicao && (
                    <Marker
                        position={local}>
                        <Popup>Você está aqui.</Popup>
                    </Marker>
                )}

                {pontos.map((p) =>(
                    <Marker key={p.id} position={[p.lat, p.lng]}>
                        <Popup>
                            <div>
                                <span>Pontos #{p.id}</span>
                                <span>Distância: {formataDist(p.distanciaM)}</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <ClickHandler onAdd={adicionarPontos}/>

            </MapContainer>
        </section>
    );
}

