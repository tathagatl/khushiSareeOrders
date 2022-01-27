
import { Dimensions } from 'react-native'

let dimesions = Dimensions.get("window")

export const SCREEN_WIDTH = dimesions.width;
export const SCREEN_HEIGHT = dimesions.height;

export const WINE_RED = '#b11226'
export const LIGHT_WINE_RED = '#FCF7F8'
export const YELLOW = '#FCBA04'
export const WHITE = '#fff'
export const BLACK = '#000'

export const ASPECT_RATIO = value => (value * SCREEN_HEIGHT) / 812

export const stringToNum = value => parseInt(value).toFixed(2)
export const BLUE = '#1253bc';
export const LIGHT_BLUE = '#ECF3FD';

export const BASE_STYLE = {
    backgroundColor: LIGHT_WINE_RED,
    flex: 1,
    padding: ASPECT_RATIO(15)
}

export const CENTERED = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}

export const TITLE = {
    fontSize: ASPECT_RATIO(25),
    color: WINE_RED,
    marginBottom: ASPECT_RATIO(10)
}
