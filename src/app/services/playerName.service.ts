import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameMapService {
  private nameMap: { [key: string]: string } = {
    "DATA RIG#TKC": "takacheer",
    "RIG nekop4nchan#2ダメージ": "nekop4nch"
  };

  constructor() { }

  /**
   * Returns the mapped display name for a player.
   * If no mapping is found, returns the original player name.
   * @param player The player object from the match data.
   */
  public getDisplayName(player: any): string {
    // Ensure the player object is valid
    if (!player || !player.name) {
      return '';
    }

    // Create the full Riot ID (e.g., "Player1#JP1")
    // NOTE: The server-side player object contains the tagline property.
    const originalFullName = `${player.name}#${player.tagline}`;

    // Return the mapped name, or the original name if not found in the map
    return this.nameMap[originalFullName] || player.name;
  }
}