class RailFenceCipher
  VERSION = 1

  def self.encode(message, depth)
    new(message, depth).encode
  end

  def self.decode(message, depth)
    new(message, depth).decode
  end

  attr_accessor :message, :depth, :columns

  def initialize(message, depth)
    @message = message
    @depth   = depth
    @columns = Array.new(message.length) { Array.new(depth) { "." }  }
  end

  # >> cipher = RailFenceCipher.new("WEAREDISCOVEREDFLEEATONCE", 3)
  # >> cipher.encode
  # => "WECRLTEERDSOEEFEAOCAIVDEN"
  def encode
    interpolate_on_columns(message)
    # [
    #   ["W", ".", "."],
    #   [".", "E", "."],
    #   [".", ".", "A"],
    #   [".", "R", "."],
    #   ["E", ".", "."],
    #   [".", "D", "."],
    #   [".", ".", "I"],
    #   [".", "S", "."],
    #   ["C", ".", "."],
    #   [".", "O", "."],
    #   [".", ".", "V"]
    #   [".", "E", "."]
    #   ["R", ".", "."]
    #   [".", "E", "."]
    #   [".", ".", "D"]
    #   [".", "F", "."]
    #   ["L", ".", "."],
    #   [".", "E", "."],
    #   [".", ".", "E"],
    #   [".", "A", "."],
    #   ["T", ".", "."],
    #   [".", "O", "."],
    #   [".", ".", "N"],
    #   [".", "C", "."],
    #   ["E", ".", "."]
    # ]
    extract_characters(columns)
  end

  # >> cipher = RailFenceCipher.new("WECRLTEERDSOEEFEAOCAIVDEN", 3)
  # >> cipher.decode
  # => "WEAREDISCOVEREDFLEEATONCE"
  def decode
    interpolate_on_columns(("?" * message.length))
    # [
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."],
    #   [".", "?", "."],
    #   [".", ".", "?"],
    #   [".", "?", "."],
    #   ["?", ".", "."]
    # ]
    rows = columns.transpose
    # [
    #   ["?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?"],
    #   [".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", ".", "?", "."],
    #   [".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", ".", ".", "?", ".", "."]
    # ]
    chars = message.chars
    rows.map! { |row| row.map { |c| c == "?" ? chars.shift : c } }
    # [
    #   ["W", ".", ".", ".", "E", ".", ".", ".", "C", ".", ".", ".", "R", ".", ".", ".", "L", ".", ".", ".", "T", ".", ".", ".", "E"],
    #   [".", "E", ".", "R", ".", "D", ".", "S", ".", "O", ".", "E", ".", "E", ".", "F", ".", "E", ".", "A", ".", "O", ".", "C", "."],
    #   [".", ".", "A", ".", ".", ".", "I", ".", ".", ".", "V", ".", ".", ".", "D", ".", ".", ".", "E", ".", ".", ".", "N", ".", "."]
    # ]
    extract_characters(rows)
  end

  private

  def depth_cycle
    @depth_cycle ||= begin
      down_rungs = (0..depth-1).to_a
      up_rungs = down_rungs.reverse[1..-2]
      (down_rungs + up_rungs).cycle
    end
  end

  def extract_characters(array)
    array.transpose.flatten.join.gsub(".", "")
  end

  def interpolate_on_columns(text)
    columns.zip(text.chars).each { |rail, c| rail[depth_cycle.next] = c }
  end
end