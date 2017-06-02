﻿import { MapMarkerDirective } from '../components/mapmarker';
import { ILatLong } from './ilatlong';
import { IPoint } from './ipoint';

export interface IMarkerEvent {
    Marker: MapMarkerDirective;
    Click: MouseEvent;
    Location: ILatLong;
    Pixels: IPoint;
}
