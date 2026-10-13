import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const root=new URL('../content/',import.meta.url);
const json=(name)=>JSON.parse(fs.readFileSync(new URL(name,root),'utf8'));
test('40+ prompts with different Lean and Trap',()=>{const prompts=json('prompts.json');assert.ok(prompts.length>=40);for(const p of prompts){assert.ok(p.text&&p.lean&&p.trap);assert.notEqual(p.lean,p.trap)}});
test('40+ distinct cards per role',()=>{for(const role of ['logic','memory','creativity','instinct']){const cards=json(`cards/${role}.json`);assert.ok(cards.length>=40);assert.equal(new Set(cards).size,cards.length)}});
test('multiplayer database schema requires CAS writes',()=>{const sql=fs.readFileSync(new URL('../supabase/schema.sql',import.meta.url),'utf8');assert.match(sql,/overthink_cas/);assert.match(sql,/expected_version/);assert.match(sql,/enable row level security/)});
