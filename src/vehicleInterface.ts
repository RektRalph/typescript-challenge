/**
 * The vehicle interface has been removed, and you need to define a new vehicle interface yourself.
 * The vehicle interface should contain three attributes: BRAND, Model and Year, which are string types and digital types.
 */

/**
 * Detailed information of obtaining vehicles
 * @param vehicle - Vehicle objects should include three attributes: Brand, Model and Year
 *
 * 範例:
 * 輸入: { brand: 'Toyota', model: 'Corolla', year: 2020 }
 * 輸出: 'Toyota Corolla (2020)'
 */
export function vehicleInfo(vehicle: { brand: string; model: string; year: number }) {
  return `${vehicle.brand} ${vehicle.model} (${vehicle.year})`;
}
