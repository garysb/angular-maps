﻿import { MapTypeId } from '../models/maptypeid';
import { ILatLong } from './ilatlong';
import { IPoint } from './ipoint';
import { IBox } from './ibox';

export interface IMapOptions {
    credentials?: string;
    customizeOverlays?: boolean;
    disableBirdseye?: boolean;
    disableKeyboardInput?: boolean;
    disableMouseInput?: boolean;
    disablePanning?: boolean;
    disableTouchInput?: boolean;
    disableUserInput?: boolean;
    disableZooming?: boolean;
    disableStreetside?: boolean;
    enableClickableLogo?: boolean;
    enableSearchLogo?: boolean;
    fixedMapPosition?: boolean;
    height?: number;
    inertiaIntensity?: number;
    navigationBarMode?: number;
    showBreadcrumb?: boolean;
    showCopyright?: boolean;
    showDashboard?: boolean;
    showMapTypeSelector?: boolean;
    showScalebar?: boolean;
    theme?: any;
    tileBuffer?: number;
    useInertia?: boolean;
    width?: number;

    bounds?: IBox;
    center?: ILatLong;
    zoom?: number;
    mapTypeId?: MapTypeId;
    centerOffset?: IPoint;
}
