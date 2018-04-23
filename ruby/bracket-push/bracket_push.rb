module Brackets
  LEFT  = "[{("
  RIGHT = "]})"

  def self.paired?(str)
    str.chars.each.with_object([]) do |c, acc|
      if LEFT.include?(c)
        acc.push(c)
      elsif RIGHT.include?(c)
        return false unless acc.last == c.tr(RIGHT, LEFT)
        acc.pop
      end
    end.empty?
  end
end

module BookKeeping
  VERSION = 4
end
