class RunLengthEncoding
  def self.encode str
    chars = str.chars and char = chars.shift ; result = "" and count = 1
    cat = -> { result << "#{count if count > 1}#{char}" }
    chars.each do |c|
      c == char ? count += 1 : (cat.call and count = 1 and char = c)
    end and cat.call
  end

  def self.decode str
    str.each_char.with_object([]).with_object("") do |(c, digits), result|
      digits << c and next if c =~ /[0-9]/
      (result << (digits.empty? ? c : c * digits.join.to_i)) and digits.clear
    end
  end
end

module BookKeeping
  VERSION = 2
end
