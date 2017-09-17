#!/usr/bin/env ruby
result = `sass ./scss/styles.scss ./css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('./styles.css')
puts "Regular compile worked successfully"
