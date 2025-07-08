import { useState, useEffect } from 'react';

/**
 * Custom React hook for state that syncs with localStorage.
 *
 * @param {string} key Key for localStorage.
 * @param {*} defaultValue Value to use if nothing is stored.
 * @returns {[*, Function]} Current value and setter function.
 */
export function useLocalStorage(key, defaultValue) {
  // Initialize state from localStorage or use default.
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item && item !== 'undefined') {
        return JSON.parse(item);
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
    // If nothing is in localStorage, return the default value.
    // The useEffect below will then persist this default value.
    return defaultValue;
  });

  // Use an effect to sync state changes back to localStorage.
  useEffect(() => {
    try {
      // This effect runs whenever 'value' or 'key' changes.
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]); // Dependency array ensures this runs on change.

  // Return the state value and the setter function.
  return [value, setValue];
}