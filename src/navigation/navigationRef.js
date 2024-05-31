// import { createNavigationContainerRef } from "@react-navigation/native";
 
// export const setNavigator = createNavigationContainerRef();
 
// export const navigate = (name, params) => {
//   if (setNavigator.isReady()) {
//     setNavigator.navigate(name, params);
//   } else {
//     console.log("Navigation not ready");
//   }
// };

export let navigationRefCopy = undefined;

export function setNavigationRef(navigationRef) {
    navigationRefCopy = navigationRef;
}

export function navigationIsReady() {
    return navigationRefCopy?.isReady(); // returns true when called in a redux saga file.
}