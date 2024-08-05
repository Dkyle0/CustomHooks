# Custom Hooks Documentation

This document provides a brief description of custom hooks implemented in the project.

## useArray

A custom hook for managing array state with convenient methods.

### Usage

```typescript
const [array, { push, update, clear, remove, filter }] = useArray(initialArray);
```

### Methods

push: Adds an element to the array.
update: Updates an element at a specific index.
clear: Clears the array.
remove: Removes an element at a specific index.
filter: Filters the array based on a callback function.

## useDebounce

A custom hook for debouncing a callback function.

### Usage

```
useDebounce(callback, delay, dependencies);
```

### Parameters

callback: The function to debounce.
delay: The delay in milliseconds.
dependencies: The dependencies array for useEffect.

## useFetch

A custom hook for fetching data from an API.

### Usage

```typescript
const { data, isLoading, error, refetch } = useFetch(url);
```

### Returns

data: The fetched data.
isLoading: Loading state.
error: Error state.
refetch: Function to refetch data with optional parameters.

## useHover

A custom hook for detecting hover state on an element.

### Usage

```
const { hovered, ref } = useHover();
```

### Returns

hovered: Boolean indicating hover state.
ref: Ref to attach to the element.

## useLocalStorage

A custom hook for managing state with localStorage.

### Usage

```
const [value, setValue] = useLocalStorage(key, initialState);
```

### Parameters

key: The key to store in localStorage.
initialState: The initial state.

### Returns

value: The current state value.
setValue: Function to update the state.

## useLocalStorage2

A variant of useLocalStorage for managing state with localStorage.

### Usage

```
const [value, { setItem, removeItem }] = useLocalStorage2(key);
```

### Parameters

key: The key for localStorage.

### Returns

value: The current state value.
setItem: Function to set a new value.
removeItem: Function to remove the item from localStorage.

## useThrottle

A custom hook for throttling a value.

### Usage

```
const throttledValue = useThrottle(value, interval);
```

### Parameters

value: The value to throttle.
interval: The throttling interval in milliseconds.

### Returns

throttledValue: The throttled value.

## useTimeout

A custom hook for managing timeouts.

### Usage

```
const { reset, clear } = useTimeout(callback, delay);
```

### Parameters

callback: The function to call after the timeout.
delay: The timeout delay in milliseconds.

### Returns

reset: Function to reset the timeout.
clear: Function to clear the timeout.

## useToggle

A custom hook for toggling a boolean state.

### Usage

```
const [value, toggleValue] = useToggle(defaultValue);
```

### Parameters

defaultValue: The initial boolean value.

### Returns

value: The current boolean state.
toggleValue: Function to toggle the state.

## useToggle2

A custom hook for toggling between string values.

### Usage

```
const [value, toggleValue] = useToggle2(defaultValues);
```

### Parameters

defaultValues: An array of string values to toggle between.

### Returns

value: The current string value.
toggleValue: Function to toggle the value.

## useUpdateEffect

A custom hook that runs an effect only on updates, not on initial mount.

### Usage

```
useUpdateEffect(callback, dependencies);
```

### Parameters

callback: The effect callback function.
dependencies: The dependencies array for useEffect.

## useUpdateLogger

A custom hook for logging updates to a value.

### Usage

```
useUpdateLogger(value);
```

### Parameters

value: The value to log updates for.

## useViewportSize

A custom hook for getting the viewport size.

### Usage

```
const { height, width } = useViewportSize();
```

### Returns

height: The viewport height.
width: The viewport width.

## useWindowEvent

A custom hook for adding and removing window event listeners.

### Usage

```
useWindowEvent(eventType, listener, options);
```

### Parameters

eventType: The event type to listen for.
listener: The event listener function.
options: Additional options for addEventListener.

## useWindowScroll

A custom hook for managing window scroll position.

### Usage

```
const [scroll, scrollTo] = useWindowScroll();
```

### Parameters

scroll: The current scroll position.
scrollTo: Function to scroll to a specific position
