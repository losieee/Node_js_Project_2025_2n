SELECT inv.item_id,inv.quantity
FROM inventories inv 
JOIN items i ON inv.item_id = i.item_id 
WHERE inv.player_id = '?'

SELECT q.* , pq.`status`FROM player_quests pq JOIN quests q ON pq.quest_id = q.quest_id WHERE pq.player_id = 1

SELECT host, user FROM mysql.user;